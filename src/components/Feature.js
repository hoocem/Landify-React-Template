import React ,  { Component } from "react";



class Feature extends Component{
    render(){

        let featureMenuData = [
            {id: "manegemnet-tab",
             href: "#manegemnet", 
             class: "nav-link active", 
             title: "Manegemnet", 
             icon: "fas fa-desktop", 
             ariaControls: "manegemnet", 
             ariaSelected: "true"},

            {id: "dashboard-tab",
             href: "#dashboard", 
             class: "nav-link", 
             title: "Dashboard", 
             icon: "fas fa-tachometer-alt", 
             ariaControls: "dashboard", 
             ariaSelected: "false"},

            {id: "storage-tab",
             href: "#storage", 
             class: "nav-link", 
             title: "Storage", 
             icon: "fas fa-folder-open", 
             ariaControls: "storage", 
             ariaSelected: "false"},

            {id: "notification-tab",
             href: "#notification", 
             class: "nav-link", 
             title: "Notification", 
             icon: "far fa-envelope-open", 
             ariaControls: "notification", 
             ariaSelected: "false"}
        ]

        let featureMenuDataList = featureMenuData.map((val, i) => {
            return(
                <li className="nav-item" key={i}>
                    <a className={`${val.class}`} id={val.id} data-toggle="tab" href={val.href} role="tab"
                        aria-controls={val.ariaControls} aria-selected={val.ariaSelected}><i className={`${val.icon}`}></i></a>
                    <span>{val.title}</span>
                </li>
            )
        })

        let featureContentData = [
            {id: "manegemnet",
            class: "tab-pane fade show active",
            ariaLabelledby: "manegemnet-tab",
            imgUrl: "assets/images/all-img/tab--content_1.png"},

            {id: "dashboard",
            class: "tab-pane",
            ariaLabelledby: "dashboard-tab",
            imgUrl: "assets/images/all-img/tab--content_1.png"},

            {id: "storage",
            class: "tab-pane",
            ariaLabelledby: "storage-tab",
            imgUrl: "assets/images/all-img/tab--content_1.png"},

            {id: "notifications",
            class: "tab-pane",
            ariaLabelledby: "notifications-tab",
            imgUrl: "assets/images/all-img/tab--content_1.png"}
        ]

        let featureContentDataList = featureContentData.map((val, i) => {
            return(
                <div className={`${val.class}`} id={val.id} role="tabpanel" aria-labelledby={val.ariaLabelledby} key={i}>
                    <img src={val.imgUrl} alt=""/>
                </div>
            )
        })

       return(
           <div>
                <div className="spacer-150"></div>
                <section className="feature-area" data-scrollax-parent="true" id="feature">
                    <div className="rt-design-elmnts one" data-scrollax="properties: { translateY: '140px' }"></div>
                    <div className="rt-design-elmnts two" data-scrollax="properties: { translateX: '-100px', translateX: '100px' }"></div>
                    <div className="rt-design-elmnts three" data-scrollax="properties: { translateY: '150px', translateX: '-120px' }"></div>
                    <div className="rt-overlay"></div>
                    <div className="rt-custom-container">
                        <div className="row">
                            <div className="col-12 mx-auto text-center">
                                <div className="rt-section-title-wrapper">
                                    <h2 className="rt-section-title">
                                        Amazing Features
                                    </h2>
                                    <p>
                                        Quality control of your data including read length distribution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="spacer-85"></div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-9  mx-auto">
                                <ul className="nav rt-round-icon-tabs" id="rttabone" role="tablist">
                                    {featureMenuDataList}
                                </ul>
                            </div>
                            <div className="col-12">
                                <div className="tab-content" id="rttaboneContent">
                                    {featureContentDataList}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
           </div>
        )
    }
}

export default Feature;
