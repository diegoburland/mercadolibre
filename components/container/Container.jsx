import Navbar from '../navbar/Navbar';

const Container = (props) => {

    return (
        <>
            <Navbar/>
            <div>
                {props.children}
            </div>
        </>
    )

}

export default Container;