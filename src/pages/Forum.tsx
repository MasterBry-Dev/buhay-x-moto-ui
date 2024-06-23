import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../store/themeConfigSlice';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
interface ForumProps {}

const Forum: React.FC<ForumProps> = ({}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPageTitle('Forum'));
    });
    const posts = [
        {
            title: 'BXM Teaser! Malapit Na Tayo Lumipad!',
            video: 'https://www.youtube.com/embed/11odZhBP9UA',
            date: 'April 02, 2024',
            thumbnail: 'https://img.youtube.com/vi/11odZhBP9UA/0.jpg',
        },
        {
            title: 'EVENT: Classic Nights RC250 Bikes Community and BUHAY X MOTO Pre-Launch!',
            body: 'Our pre-launch is happening along with one of the most popular bike groups in the metro! See you there! Feb. 10, 2024 - 88 Fryer, Timog cor. Panay Ave. QC',
            image: '../buhay-x-moto-ui/assets/images/postsImage.jpg',
            date: 'February 04, 2024 ',
        },
        {
            title: 'TEASER VIDEO',
            video: 'https://www.youtube.com/embed/nNYuVEY-Sy0',
            date: 'February 03, 2024 ',
            thumbnail: 'https://img.youtube.com/vi/nNYuVEY-Sy0/0.jpg',
        },
    ];

    const rightBarIcons = [
        {
            header: 'Follow Our FB Page',
            src: '../buhay-x-moto-ui/assets/images/BXMFBpage.png',
            link: 'https://www.facebook.com/profile.php?id=61558962730787',
        },
        {
            header: 'Become a member NOW!',
            src: '../buhay-x-moto-ui/assets/images/BXMRegistration.png',
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSdADCaQchGJyJaaN63YaiUK3EBgeQ0dqxbNZ2w7-46VhjUnAg/viewform',
        },
        {
            header: 'Our partner channel',
            src: '../buhay-x-moto-ui/assets/images/pinoyXtreme.png',
            link: 'https://www.facebook.com/pxtremeofficial/?_rdc=2&_rdr',
        },
    ];
    return (
        <div>
            {/* <h1 className="px-24 mb-7 font-bold text-2xl text-amber-400">FORUM</h1> */}
            <div className="flex ">
                <div className="grid xl:grid-cols-3 xl:ms-28 xl:me-5 gap-5 col-span-3">
                    {posts.map((posts, index) => {
                        return (
                            <div key={index} className="xl:col-span-3 panel dark:bg-slate-900">
                                <h2 className="text-dark font-bold text-lg dark:text-white-light">{posts.title}</h2>
                                {posts.body && <p className="text-base py-10 xl:mx-20 mx-2 text-center dark:text-white-light">{posts.body}</p>}
                                {posts.video && (
                                   <div className="flex justify-center py-10">
                                   <iframe height="400" width="550" className="lg:w-3/4 w-80" src={posts.video}></iframe>
                               </div>
                                )}
                                {posts.image && (
                                    <div className="flex justify-center">
                                        <img src={posts.image} alt="Image" className="" />
                                    </div>
                                )}
                                <div className="flex justify-between items-center px-4 py-2">
                                    <span className="dark:text-white-light">{posts.date}</span>

                                    <div className="flex space-x-3 text-right">
                                        <a href="https://www.facebook.com/profile.php?id=61558962730787">
                                            <FaFacebook />
                                        </a>

                                        <FaEnvelope />
                                        <FaTwitter />
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* <div className="xl:col-span-1 panel">
                    <p>s</p>
                </div> */}
                </div>
                <div className=" hidden lg:inline sticky top-20 h-screen">
                    <div className="mt-0 mr-5">
                        {rightBarIcons.map((data, index) => {
                            return (
                                <a href={data.link} className="block w-full">
                                    <div key={index} className="mb-3">
                                        <span className="text-base text-dark font-bold dark:text-white-light">{data.header}</span>
                                        <img src={data.src} alt="Boss Tony" className="w-96" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                    <h3 className="font-bold text-amber-600">POPULAR POSTS</h3>
                    <hr className="mb-3 dark:border-[#fafafa]" />

                    <div className="mb-10">
                        <p className="text-xs mb-3 font-bold dark:text-white-light">{posts[1].title}</p>
                        <div className="flex justify-center">
                            <img src={posts[1].image} alt="Image" className="h-56" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forum;
