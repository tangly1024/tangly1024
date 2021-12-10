import H5 from '@material-tailwind/react/Heading5';
import LeadText from '@material-tailwind/react/LeadText';
import Icon from '@material-tailwind/react/Icon';
import Link from 'next/link';

export default function DefaultFooter() {
    return (
        <>
            <footer className="relative bg-gray-100 pt-8 pb-6">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap text-center lg:text-left pt-6">
                        <div className="w-full lg:w-6/12 px-4">
                            <H5 color="gray">Tangly</H5>
                            <div className="-mt-4">
                                <LeadText color="blueGray">
                                    Easy to use React components for Tailwind
                                    CSS and Material Design.
                                </LeadText>
                            </div>
                            <div className="flex gap-2 mt-6 md:justify-start md:mb-0 mb-8 justify-center">

                                <a
                                    href="https://www.weibo.com/tangly1024"
                                    className="grid place-items-center bg-white text-pink-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-weibo"
                                    />
                                </a>
                                <a
                                    href="https://github.com/tangly1024"
                                    className="grid place-items-center bg-white text-gray-900 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon
                                        family="font-awesome"
                                        name="fab fa-github"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top">
                                <div className="w-full lg:w-4/12 px-4 ml-auto md:mb-0 mb-8">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="https://www.tangly1024.com/pofile"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                                target="_blank"
                                                href=" https://blog.tangly1024.com/?ref=home"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/tangly1024/?ref=home"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Github
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-gray-900 text-sm font-serif font-medium mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                href="https://github.com/tangly1024/tangly1024/blob/main/LICENSE.md?ref=home"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                MIT License
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/tangly1024/tangly1024/blob/main/CONTRIBUTING.md?ref=mtk"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Contribute
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://github.com/tangly1024/tangly1024/blob/main/CODE_OF_CONDUCT.md?ref=home"
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                                            >
                                                Code of Conduct
                                            </a>
                                        </li>
                                        <li>
                                         
                                            <Link href="/contact">   
                                            <a rel="noreferrer" className="text-gray-700 hover:text-gray-900 block pb-2 text-sm">
                                                Contact Us
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-300" />

                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-700 font-medium py-1">
                                Copyright © {new Date().getFullYear()} tangly1024.com by{' '}
                                <a
                                    href="https://www.tangly1024.com?ref=mtk"
                                    className="text-gray-700 hover:text-gray-900 transition-all"
                                >
                                    tangly1024
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
