/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function DropDown({ items, to }) {
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close);
    }, []);

    return (
        <div ref={dropDownRef} className="relative w-fit">
            <button onClick={() => setOpen((prev) => !prev)} className="flex items-center gap-1">
                Pages <IoIosArrowDown />
            </button>
            <ul className={`${open ? 'visible translate-y-0 duration-300' : 'invisible translate-y-4'} absolute top-10 z-50 w-full mt-1 space-y-3`}>
                {items?.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            to={to[idx]}
                            className={`rounded-sm p-2 ${open ? 'opacity-100 duration-300' : 'opacity-0'} hover:bg-pink hover:text-white`}>
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}