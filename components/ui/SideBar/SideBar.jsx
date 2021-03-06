import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {useStateValue} from "../../../Provider/StateProvider";
import Image from "next/image";
import {Logo} from "../../../assets/assetExports";
import {useRouter} from "next/router";

const SideBar = (props) => {

    const { handleOpenDrawer } = props;
    const [{isDrawerOpen}] = useStateValue();

    const router = useRouter();

    return (
        <>
            <Transition.Root
                show={isDrawerOpen}
                as={Fragment}
            >
                <Dialog
                    as="div"
                    static
                    className="fixed z-50 inset-0 overflow-hidden"
                    open={isDrawerOpen}
                    onClose={handleOpenDrawer}
                >
                    <div className="absolute inset-0 overflow-hidden">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-40 transition-opacity" />
                        </Transition.Child>
                        <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full" >
                                <div className="relative max-w-md">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-500"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-500"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0" >
                                        <div className="absolute p-4 rounded-bl-full rounded-tl-full top-0 -left-4 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4 bg-brand mt-4">
                                            <button className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-transparent focus:ring-transparent"
                                                    onClick={handleOpenDrawer}>
                                                <span className="sr-only">Close panel</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="h-full w-full flex flex-col bg-white dark:bg-gray-900 shadow-xl overflow-y-scroll">
                                        <div className="p-4 cursor-pointer bg-white dark:bg-gray-900" onMouseDown={handleOpenDrawer}>
                                            <Dialog.Title className="text-lg bg-white dark:bg-gray-900">
                                                <div className="flex w-60 flex-row items-center justify-between px-4">
                                                    <div>
                                                        <Link href="/">
                                                            <a>
                                                                <Image src={Logo} height={80} width={80} alt="ghana pre order"/>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div>
                                                        <h1 className="text-brand-deep">{" "}</h1>
                                                    </div>
                                                </div>
                                            </Dialog.Title>
                                        </div>
                                        <div className="relative flex-1 px-6">
                                            {/* panel content */}
                                            <div className="bg-white dark:bg-gray-900 absolute inset-0 px-2">
                                                <div className="w-full max-w-md my-2 bg-white dark:bg-gray-900">
                                                    <ul className="flex flex-col items-center justify-between">
                                                        <li onClick={() => router.push('/auth')} className="text-gray-700 hover:text-gray-50 w-full mb-2 font-bold hover:bg-brand-deep p-4 cursor-pointer">
                                                            <Link href="/auth">
                                                                <a className="uppercase">Log In</a>
                                                            </Link>
                                                        </li>
                                                        <li onClick={() => router.push('/auth/signup')} className="text-gray-700 hover:text-gray-50 w-full mb-2 font-bold hover:bg-brand-deep p-4 cursor-pointer">
                                                            <Link href="auth/signup">
                                                                <a className="uppercase">Sign Up</a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* /End panel content */}
                                        </div>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}

export default SideBar;