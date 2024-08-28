// src/Components/CoachingTeam/Coaches.tsx
import React from 'react';
import {Chip} from "@material-tailwind/react";

type ImageProps = {
    src: string;
    alt?: string;
};

type TeamMembersProps = {
    image: ImageProps;
    name: string;
    jobTitle: string;
    description: string;
    email?: string;
    type: 'base' | 'supplemental'; // Added type property
};

type Props = {
    tagline: string;
    heading: string;
    description: string;
    teamMembers: TeamMembersProps[];
};

export type CoachesProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Coaches: React.FC<CoachesProps> = (props) => {
    const {tagline, heading, description, teamMembers} = props;

    return (
        <section className="px-[5%] py-12">
            <div className="container">
                <div className="mx-auto mb-10 max-w-lg text-center md:mb-18 lg:mb-15">
                    <div className="d-flex justify-content-center mt-2 mb-2">
                        <Chip className="custom-chip-two" color={"red"} value={tagline}/>
                    </div>
                    <h2 className="mb-3 text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h2>
                    <p className="md:text-md">{description}</p>
                </div>

                <div
                    className="coach-info grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
                    {teamMembers.map((member, index) => (
                        <div className="coach-card flex flex-col items-stretch text-center" key={index}>
                            <div className="relative mb-4 size-full overflow-hidden pt-[66%] md:mb-6 md:pt-[100%]">
                                <img
                                    src={member.image.src}
                                    alt={member.image.alt}
                                    className="absolute inset-0 size-full object-cover"
                                />
                            </div>
                            <div className="mb-3 md:mb-4">
                                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                                {member.jobTitle && (
                                    <div className="d-flex justify-content-center mt-1">
                                        <Chip
                                            className="custom-chip"
                                            size="sm"
                                            color="black"
                                            variant="outlined"
                                            value={member.jobTitle}
                                        />
                                    </div>
                                )}

                            </div>

                            <p className="coach-description">{member.description}</p>
                            {member.type === 'base' && member.email && <p className="coach-email">{member.email}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

Coaches.displayName = "StarSkateCoaches";
