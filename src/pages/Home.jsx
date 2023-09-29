import { Fragment } from "react";
import Header from "../components/Header";
import RequireAuth from "../components/RequireAuth";
import LeftSide from "../components/LeftSide";
import MainSide from "../components/MainSide";
import RightSide from "../components/RightSide";

const Home = () => {

    return (
    <Fragment>
        <RequireAuth>
            <Header/>
            <section className="w-[90%] mx-auto my-[52px]">
                <h5 className=" text-center underline text-[#434649]"><a className="text-[#0a66c2] cursor-pointer no-underline">Hiring in a hurry? - </a> Find talented pros in record time with Upwork and keep business moving</h5>
            </section>
            <div className=" w-[99%] mx-auto flex justify-between gap-[25px] max-[960px]:flex-col max-[960px]:justify-center max-[960px]:items-center">
                <LeftSide/>
                <MainSide/>
                <RightSide/>
            </div>
        </RequireAuth>
    </Fragment>
    );
};

export default Home;
