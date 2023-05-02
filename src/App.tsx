import * as  React from 'react'
interface IProps {
    num: number
}
interface IState { }
export class App extends React.Component<IProps, IState> {

    render() {
        const { num } = this.props
        return (
            <div>App {num}</div>
        )
    }
}
