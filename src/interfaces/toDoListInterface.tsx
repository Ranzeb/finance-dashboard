import { As } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface toDoListInterface {
    icon: As | undefined,
    title: string,
    time: Date
}