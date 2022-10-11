export default function Framedata(props) {

    let frameData = JSON.parse(JSON.stringify(props.data));

    let returnHTML = [];

    for (let i = 0; i < frameData.length; i++) {
        returnHTML.push(
            <tr key={`framedata-row-${i}`}>
                <td>
                    {frameData[i].demo ? (<a target="_blank" rel="noreferrer" href={frameData[i].demo}>{frameData[i].input}</a>) : frameData[i].input}
                </td>
                <td>{frameData[i].impact}</td>
                <td>{frameData[i].damage}</td>
                <td>{frameData[i].hit}</td>
                <td>{frameData[i].block}</td>
                <td>{frameData[i].counter}</td>
                <td>{frameData[i].notes}</td>
            </tr>
        )
    }

    return (
        <table className="framedata">
            <tbody>
                <tr>
                    <th>Input</th>
                    <th>Impact</th>
                    <th>Damage</th>
                    <th>Hit</th>
                    <th>Block</th>
                    <th>Counter</th>
                    <th>Notes</th>
                </tr>
                {returnHTML}
            </tbody>
        </table>
    )
}