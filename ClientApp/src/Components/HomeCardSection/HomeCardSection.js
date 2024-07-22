import React from "react";
import img1 from '../../assets/can-power.jpg';
import img2 from '../../assets/can-skate.jpg';
import img3 from '../../assets/star-skate.jpg';
import img4 from '../../assets/intro-to-figure-skate.jpg';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Fade from 'react-reveal/Fade';


export function CardDefault({ src, title, description }) {
    return (
        <Fade top distance="10%" duration={1500}>
            <Card className="mt-5 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={src}
                        alt={src}
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        {title}
                    </Typography>
                    <Typography>
                        {description}
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
        </Fade>
        
    );
}

export function CardList() {
    const cards = [
        {
            src: img1,
            title: "Can Power Skate",
            description: "Develop and improve upon the skills required for hockey and/or ringette in a fast-paced and upbeat environment from certified coaches."
        },
        {
            src: img2,
            title: "Star Skate",
            description: "Enter the sport of figure skating. Skaters have the opportunity to participate in competitions and/or assessments."
        },
        {
            src: img3,
            title: "Intro To Figure skate\n",
            description: "Develop the basic figure skating skills in group lesson. Acts as a transition between CanSkate and StarSkate."
        },
        {
            src: img4,
            title: "Can Skate",
            description: "Learn how to skate in a upbeat and progressive environment. Skaters are split into groups based on skill level and age."
        }
    ];

    return (
        <Fade>
            <div>
                <div className="container mx-auto mb-10 mt-30 text-center lg:mb-20">
                    <Typography
                        color="blue-gray"
                        className="mb-2 font-bold uppercase"
                    >
                        Programs
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="mb-4 !text-2xl font-bold lg:!text-4xl"
                    >
                        Check out or programs!
                    </Typography>
                    <Typography
                        variant="lead"
                        className="mx-auto max-w-lg !text-gray-500"
                    >
                        We're constantly trying to express ourselves and actualize our
                        dreams. If you have the opportunity to play
                    </Typography>
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-5">
                    {cards.map((card, index) => (
                        <CardDefault
                            key={index}
                            src={card.src}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </Fade>

    );
}
