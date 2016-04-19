class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <div className="header-row">
                    <div className="header-col">
                        <div className="header-row">
                        <img src="http://40.media.tumblr.com/ec846c07ef43ac5afd541e8ac42b97a4/tumblr_inline_o1qq0eNOpU1smomya_400.jpg"
                            style={{ width: 100, height: 100}} />
                        <h1 style={{ paddingLeft: 10 }}>{this.props.title}</h1>
                        </div>
                    </div>

                    <div className="header-col">
                        <div className="header-col">
                        <div className="header-row">
                            <span className="header-desc">
                                <strong>Genre: </strong>
                                Musical
                            </span>
                        </div>
                        <div className="header-row">
                            <span className="header-desc">
                                <strong>Desc: </strong>
                                {this.props.desc}
                            </span>
                        </div>
                    </div>
                    <div className="header-col">
                         <div className="header-row">
                             <span className="header-desc">
                                 <strong>Created By: </strong>
                                 Lin Manuel-Miranda
                             </span>
                         </div>
                     </div>
                     </div>
                </div>
                <hr/>
            </div>
        )
    }
}
