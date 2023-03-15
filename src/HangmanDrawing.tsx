export const HangmanDrawing = () => {
    const HEAD = (
        <div style={{
            height: "50px", 
            width: "50px", 
            borderRadius: "50%", 
            border: "10px solid black", 
            position: "absolute", 
            top: "50px", 
            right: "-30px",
        }}>

        </div>
    );

    const BODY = (
        <div style={{
            height: "100px", 
            width: "10px", 
            backgroundColor: "black", 
            position: "absolute", 
            top: "120px", 
            right: "0px",
        }}>
        </div>
    );


    const LEFT_ARM = (
        <div style={{
            width: "100px", 
            height: "10px", 
            backgroundColor: "black", 
            position: "absolute", 
            top: "150px", 
            right: "-100px",
            rotate: "-30deg", 
            transformOrigin: "left bottom",

        }}>
        </div>
    );

    const RIGHT_ARM = (
        <div style={{
            width: "100px", 
            height: "10px", 
            backgroundColor: "black", 
            position: "absolute", 
            top: "150px", 
            right: "10px",
            rotate: "30deg", 
            transformOrigin: "right bottom"

        }}>
        </div>
    );

     const RIGHT_LEG = (
        <div style={{
            width: "100px", 
            height: "10px", 
            backgroundColor: "black", 
            position: "absolute", 
            top: "210px", 
            right: "-90px",
            rotate: "60deg", 
            transformOrigin: "left bottom",

        }}>
        </div>
    );

    const LEFT_LEG = (
        <div style={{
            width: "100px", 
            height: "10px", 
            backgroundColor: "black", 
            position: "absolute", 
            top: "210px", 
            right: "0px",
            rotate: "-60deg", 
            transformOrigin: "right bottom",

        }}>
        </div>
    );

    return (
        <div style={{
            position: "relative"
        }}> 
            {HEAD}
            {BODY}
            {LEFT_ARM}
            {RIGHT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}
            <div style={{
                height: "50px", 
                width: "10px",
                position: "absolute", 
                top: "10px", 
                right: "0px", 
                backgroundColor: "black"
            }}></div>
            <div style={{
                width: "250px", 
                height: "10px", 
                marginLeft: "120px",
                backgroundColor: "black"
            }}></div>
            <div style={{
                width: "10px", 
                height: "500px", 
                marginLeft: "120px", 
                backgroundColor: "black"
            }}>
            </div> 
            <div style={{
                width: "250px", 
                height: "10px", 
                backgroundColor: "black"
            }}></div>
        </div>
    ); 
}