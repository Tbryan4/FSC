import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function CardDefault() {
    return (
            <Card className="mt-5 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        UI/UX Review Check
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button>Read More</Button>
                </CardFooter>
            </Card>
    );
}

export function CardList() {
    const cards = [1, 2, 3, 4]; // An array representing the number of cards

    return (
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
                    Turn your idea into a startup
                </Typography>
                <Typography
                    variant="lead"
                    className="mx-auto max-w-lg !text-gray-500"
                >
                    We&apos;re constantly trying to express ourselves and actualize our
                    dreams. If you have the opportunity to play
                </Typography>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-5">
                {cards.map((_, index) => (
                    <CardDefault key={index}/>
                ))}
            </div>
        </div>
    );
}