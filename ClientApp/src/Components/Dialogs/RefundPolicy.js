// RefundPolicyDialog.js
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export function RefundPolicyDialog() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <p onClick={handleOpen} className="cursor-pointer antialiased font-sans text-base leading-relaxed text-gray-700 py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                Refund Policy
            </p>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Refund Policy</DialogHeader>
                <DialogBody>
                    All programs are non-refundable except in extenuating circumstances and will be considered on a case-by-case basis by the board of volunteers. Reasons for a refund could include: moving away, injury preventing participation, and incorrect program. Refunds are not guaranteed. If a refund is granted, the Admin fee and the Skate Canada fee are non-refundable. The Skate Canada fee goes directly to Skate Canada and not to our organization. This membership can be used at any other Skate Canada club.
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