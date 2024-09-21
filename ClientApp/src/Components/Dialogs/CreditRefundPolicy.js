// CreditPolicyDialog.js
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export function CreditPolicyDialog() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <p onClick={handleOpen} className="cursor-pointer antialiased font-sans text-base leading-relaxed text-gray-700 py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                Credit Policy
            </p>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Credit Policy</DialogHeader>
                <DialogBody>
                    Credit back to account will be considered on a case by case basis. You will receive it as a gift card to your account.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Close</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}