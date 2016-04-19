
class Content extends React.Component {
    constructor() {
        super()
        this.state = {
            currTab: 'script',
        }
    }
    render () {
        return (
            <div>
            <InnerNav changeTab={this.changeTab.bind(this)}/>
            <div className="content">
                <Sidebar />
                <Tab currTab={this.state.currTab}/>
            </div>
            </div>
        )
    }
    changeTab (id) {
        this.setState({ currTab: id })
    }
}
