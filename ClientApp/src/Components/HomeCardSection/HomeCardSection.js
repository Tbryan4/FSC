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

export function CardDefault({ src, title, description, link }) {
    return (
        <Card className="mt-5 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={src}
                    alt={title}
                    className="object-cover w-full h-full"
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
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button color="red">
                        Read More
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
}

export function CardList() {
    const cards = [
        {
            src: img1,
            title: "CanPower",
            description: "Develop and improve upon the skills required for hockey and/or ringette in a fast-paced and upbeat environment from certified coaches.",
            link: "/canpowerskate" // Replace with actual URL
        },
        {
            src: img3,
            title: "StarSkate",
            description: "Enter the sport of figure skating. Skaters have the opportunity to participate in competitions and/or assessments.",
            link: "/starskate" // Replace with actual URL
        },
        {
            src: img2,
            title: "Intro to Figure Skating",
            description: "Develop the basic figure skating skills in group lesson. Acts as a transition between CanSkate and StarSkate.",
            link: "/introtofigureskating" // Replace with actual URL
        },
        {
            src: img4,
            title: "Learn to Skate",
            description: "Learn how to skate in a upbeat and progressive environment. Skaters are split into groups based on skill level and age.",
            link: "/canskate" // Replace with actual URL
        }
    ];

    return (
        <div>
            <div className="container mx-auto mb-10 mt-30 text-center lg:mb-20">
                <Typography
                    color="blue-gray"
                    className="mb-2 font-bold uppercase"
                >
                    Check Out Our
                </Typography>
                <Typography
                    color="blue-gray"
                    className="mb-4 !text-2xl font-bold lg:!text-4xl"
                >
                    Programs
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-lg !text-gray-500"
                >
                    Explore our wide range of figure skating programs! From beginners to advanced skaters, we offer something for everyone. Take a look at the programs we offer and find the one that's right for you.
                </Typography>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-5">
                {cards.map((card, index) => (
                    <CardDefault
                        key={index}
                        src={card.src}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                    />
                ))}
            </div>
        </div>
    );
}
