import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment, useState } from 'react';
import IconX from '../Icon/IconX';

interface AboutProps {
    ishow: boolean;
    onClose: (data: any) => void;
}

const AboutModal: React.FC<AboutProps> = ({ ishow, onClose }) => {
    return (
        <div className="mb-5">
            <Transition appear show={ishow} as={Fragment}>
                <Dialog as="div" open={ishow} onClose={() => onClose(false)}>
                    <TransitionChild as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0" />
                    </TransitionChild>
                    <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
                        <div className="flex min-h-screen items-center justify-center px-4">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel as="div" className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark">
                                    <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                                        <h5 className="text-lg font-bold">ABOUT</h5>
                                        <button type="button" className="text-white-dark hover:text-dark" onClick={() => onClose(false)}>
                                            <IconX />
                                        </button>
                                    </div>
                                    <div className="p-5">
                                        <div className="mb-5 flex items-center justify-center">
                                            <div className="w-full  dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                                                <div className="py-7 px-6">
                                                    <div className="-mt-7 mb-7 rounded-tl rounded-tr h-[215px] overflow-hidden">
                                                        <img src="../../dist/assets/images/BXMHeader.jpg" alt="cover" className="w-full h-full " />
                                                    </div>
                                                    <h5 className="text-[#3b3f5c] text-xl font-semibold mb-4 dark:text-white-light"> BUHAY X MOTO is a motorcycle-themed TV show in the Philippines</h5>
                                                    <hr className="my-4 dark:border-[#fafafa]" />
                                                    <p className="text-dark">
                                                        Producer and Managing Director -
                                                        <a href="https://tonyagudo.blogspot.com/" className="text-dark text-center dark:text-white-light">
                                                            {' '}
                                                            Tony Agudo
                                                        </a>
                                                    </p>
                                                    <p className="text-dark">
                                                        Assistant Editor -
                                                        <a href="https://www.facebook.com/jeprey.forgot?mibextid=ZbWKwL" className="text-dark text-center dark:text-white-light">
                                                            {' '}
                                                            Tom Joad
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 flex items-center justify-end">
                                            <button type="button" className="btn btn-primary ltr:ml-4 rtl:mr-4" onClick={() => onClose(false)}>
                                                CLOSE
                                            </button>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
export default AboutModal;
