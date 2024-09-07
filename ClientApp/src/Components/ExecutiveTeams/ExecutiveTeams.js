import img1 from "../../assets/executiveteam/scott-sutton.png"
import img2 from "../../assets/executiveteam/cat-h.png"
import img3 from "../../assets/executiveteam/vicky-b.png"
import img4 from "../../assets/executiveteam/abby-s.png"
import img5 from "../../assets/executiveteam/mr-hung.png"
import img6 from "../../assets/executiveteam/kara-h.png"
import img7 from "../../assets/executiveteam/Jenna-h.png"


const ExecutiveTeam = (props) => {
    const { tagline, heading, description, teamMembers, footer } = {
        ...ExecutiveTeamDefaults,
        ...props,
    };

    return (
        <section className="px-[5%] py-16 ">
            <div className="container">
                <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
                    <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="md:text-md">{description}</p>
                </div>
                <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4 ">
                    {teamMembers.map((member, index) => (
                        <ExecutiveTeamMember key={index} member={member} />
                    ))}
                </div>
                <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
                    <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                        {footer.heading}
                    </h4>
                    <p className="md:text-md">{footer.description}</p>
                </div>
            </div>
        </section>
    );
};

const ExecutiveTeamMember = ({ member }) => {
    return (
        <div className="flex flex-col items-stretch text-center">
            <div className="mb-5 flex w-full items-center justify-center md:mb-6">
                <img
                    src={member.image.src}
                    alt={member.image.alt}
                    className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                />
            </div>
            <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                <h6 className="md:text-md">{member.jobTitle}</h6>
            </div>
        </div>
    );
};

const ExecutiveTeamDefaults = {
    tagline: "Meet our",
    heading: "Board Members",
    description: "All Board positions have a $150 credit given to the member account per season that they are an active board member. Thank you for helping our club run!",
    teamMembers: [
        {
            image: {
                src: img1,
                alt: "Placeholder image 1",
            },
            name: "Scott Sutton",
            jobTitle: "President",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            
        },
        {
            image: {
                src: img5,
                alt: "Placeholder image 1",
            },
            name: "Nam Hoang",
            jobTitle: "Vice President",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        {
            image: {
                src: img6,
                alt: "Placeholder image 1",
            },
            name: "Kara Hodnefield",
            jobTitle: "Test Chair",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        {
            image: {
                src: img1,
                alt: "Placeholder image 1",
            },
            name: "Scott Sutton",
            jobTitle: "Registar",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        {
            image: {
                src: img7,
                alt: "Placeholder image 1",
            },
            name: "Jenna Hodnefield",
            jobTitle: "Coaches Representative",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        {
            image: {
                src: img4,
                alt: "Placeholder image 1",
            },
            name: "Abigail Seewald",
            jobTitle: "Coaches Representative",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        {
            image: {
                src: img3,
                alt: "Placeholder image 1",
            },
            name: "Vickey Bu",
            jobTitle: "Volunteer Coordinator",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        {
            image: {
                src: img2,
                alt: "Placeholder image 1",
            },
            name: "Cat Trinh Nguyen",
            jobTitle: "Ice Show Coordinator",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",

        },
        
        ],
    footer: {
        heading: "",
        description: "",
        button: { title: "Open positions", variant: "secondary" },
    },
};

export default ExecutiveTeam;
