import BaseLayout from "../../components/layouts/BaseLayout.tsx";
import "./Aboutus.scss";
export default function AboutusPage() {

    return (
        <BaseLayout>
            <div className="section-about">
                <div className="about-header">
                    <div className="box-center">
                        <div className="box-center-title col-xs-offset-7 col-xs-5">
                            <div className="title-wrapper">
                                <h1>About</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is simply dummy text of the printing.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-content-1 row center-xs">
                    <div className="content-1-wrap">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque illo eos perspiciatis, atque placeat exercitationem, ullam doloribus nesciunt, inventore deserunt? Dolor similique doloribus quo reprehenderit. Quaerat ipsam reprehenderit dicta cum earum. Nemo, veritatis incidunt. </p>
                    </div>
                </div>
                <div className="about-content-2 row middle-xs">
                    <div className="content-2-wrap col-md">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque illo eos perspiciatis, atque placeat exercitationem, ullam doloribus nesciunt, inventore deserunt? Dolor similique doloribus quo reprehenderit. Quaerat ipsam reprehenderit dicta cum earum. Nemo, veritatis incidunt. </p>
                    </div>
                    <div className="content-2-img col-md-7"></div>
                </div>
                <div className="about-content-3 row middle-xs">
                    <div className="content-3-img col-md-7"></div>
                    <div className="content-3-wrap col-md">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque illo eos perspiciatis, atque placeat exercitationem, ullam doloribus nesciunt, inventore deserunt? Dolor similique doloribus quo reprehenderit. Quaerat ipsam reprehenderit dicta cum earum. Nemo, veritatis incidunt. </p>
                    </div>
                </div>
                <div className="about-content-4 row middle-xs">
                    <div className="content-4-wrap col-md">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque illo eos perspiciatis, atque placeat exercitationem, ullam doloribus nesciunt, inventore deserunt? Dolor similique doloribus quo reprehenderit. Quaerat ipsam reprehenderit dicta cum earum. Nemo, veritatis incidunt. </p>
                    </div>
                    <div className="content-4-img col-md-7"></div>
                </div>
            </div>
        </BaseLayout>
    )
}