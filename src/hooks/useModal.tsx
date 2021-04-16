import { useState } from 'react';

export default function useModal() {

    const [open, setOpen] = useState<number | string | boolean | undefined>(undefined);

    const addModal = (id: number | string | boolean | undefined) => {
        setOpen(id);
    }

    return [open, addModal] as const;
}