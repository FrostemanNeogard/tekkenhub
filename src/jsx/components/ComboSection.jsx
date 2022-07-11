export default function ComboSection(props) {

    let comboData = JSON.parse(JSON.stringify(props.data));

    let returnHTML = [];

    for (let i = 0; i < comboData.length; i++) {
        returnHTML.push(
            <h3></h3>
        )
    }

    return (
        <>
        </>
    )

}