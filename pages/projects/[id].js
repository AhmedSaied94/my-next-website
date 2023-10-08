import Head from "next/head";
import axios from "axios";
import { BaseUrl } from "../../components/BaseeUrl"
import ProjectGallery from "../../components/ProjectGallery";
import ContactMe from "../../components/ContactMe";
import Image from "next/image";


function Project({project}) {
    return ( 
        <div className="px-2 mt-5 py-0">
        <div className="container py-5">
            <Head>
                <title>{project.name}</title>
                <meta name="description" content={project.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="row mt-5 gap-5">
                <div className="col-12 ">
                    {
                        project.gallery.images.length > 0 ?
                            <ProjectGallery gallery={project.gallery} projectName={project.title} />
                            :
                        <Image src={`/media${project.main_preview?.split("media")[1]}`} layout="responsive" 
                        alt={project.title} className="img-fluid" />
                    }
                </div>
                <div className="col-12 ">
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                    {project.skills&& project.skills.map(skill => <span key={skill.id} className="badge bg-primary me-2">{skill.name}</span>)}

                    <div className="mt-5 d-flex gap-2 flex-wrap">
                        <h3 className="w-100">Project Links</h3>
                        <button className="btn btn-primary"
                            onClick={() => window.open(project.github_back_link, "_blank")}
                            disabled={!project.github_back_link}
                        >Github BE</button>
                        <button className="btn btn-info"
                            onClick={() => window.open(project.github_front_link, "_blank")}
                            disabled={!project.github_front_link}
                        >Github FE</button>
                        <button className="btn btn-warning"
                            onClick={() => window.open(project.live_link, "_blank")}
                            disabled={!project.live_link}
                        >Live</button>
                    </div>
                </div>
            </div>
        </div>
            <ContactMe />
    </div>
     );
}

export default Project;

export async function getServerSideProps(context) {
    const res = await axios.get(`${BaseUrl}api/projects/${context.params.id}/`);

    const project = res.data;
    return {
        props: { project }, // will be passed to the page component as props
    };
}