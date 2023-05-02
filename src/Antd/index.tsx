import * as  React from 'react'
import "./index.css"
declare type TypeComponents = "Button"
interface IProps {
}
interface IState {
    type: TypeComponents
}
export class Antd extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            type: "Button"
        };
    }

    render() {
        return (
            <div className='d-flex '>
                <div className='border-wrapper border-wrapper-left'>
                    <div><button type="button" className="btn btn-primary">Button</button></div>
                    {/* <div><button type="button" className="btn btn-secondary">Secondary</button></div>
                    <div><button type="button" className="btn btn-success">Success</button></div>
                    <div><button type="button" className="btn btn-danger">Danger</button></div>
                    <div><button type="button" className="btn btn-warning">Warning</button></div>
                    <div><button type="button" className="btn btn-info">Info</button></div>
                    <div><button type="button" className="btn btn-light">Light</button></div>
                    <div><button type="button" className="btn btn-dark">Dark</button></div> */}
                </div>
                <div className='col  border-wrapper'>
                    <div className='box-components-6'>
                        <div><button><span>Primary Button</span></button></div>
                    </div>
                </div>
            </div>
        )
    }
}
