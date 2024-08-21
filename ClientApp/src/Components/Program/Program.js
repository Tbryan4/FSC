import React from 'react';
import img from "../../assets/can-power.jpg"

export const Programs = ({
                             heading = "Project name here",
                             description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
                             image = {
                                 src: img,
                                 alt: "Placeholder image",
                             },
                             tags = [
                                 {
                                     url: "#",
                                     label: "Tag one",
                                 },
                                 {
                                     url: "#",
                                     label: "Tag two",
                                 },
                                 {
                                     url: "#",
                                     label: "Tag three",
                                 },
                             ],
                             metaDataSections = [
                                 {
                                     title: "Client",
                                     description: "Full name",
                                 },
                                 {
                                     title: "Date",
                                     description: "March 2023",
                                 },
                                 {
                                     title: "Role",
                                     description: "Role name",
                                 },
                                 {
                                     url: "#",
                                     title: "Website",
                                     description: "www.relume.io",
                                 },
                             ],
                         }) => {
    return (
        <section className="flex h-svh min-h-svh flex-col">
            <div className="relative flex-1 h-100">
                <img src={image.src} className="absolute inset-0 size-full object-cover" alt={image.alt}/>
            </div>
            <div className="px-[5%] py-12 md:py-16 lg:py-20">
                <div
                    className="container grid grid-cols-1 items-start gap-12 md:grid-cols-[1.5fr_1fr] lg:gap-x-20 lg:gap-y-16">
                    <div>
                        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
                        <p className="md:text-md">{description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <a
                                    key={index}
                                    href={tag.url}
                                    className="bg-background-secondary px-2 py-1 text-sm font-semibold"
                                >
                                    {tag.label}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="grid auto-cols-fr grid-cols-2 gap-8">
                        {metaDataSections.map((metaDataSection, index) => (
                            <div key={index}>
                                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                                    {metaDataSection.title}
                                </h2>
                                {metaDataSection.url ? (
                                    <a href={metaDataSection.url} className="underline">
                                        {metaDataSection.description}
                                    </a>
                                ) : (
                                    <p>{metaDataSection.description}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.

                </p>
                <br/>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum
                    interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est,
                    ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc
                    sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet
                    sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non
                    fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.

                </p>
            </div>
        </section>

    );
};
