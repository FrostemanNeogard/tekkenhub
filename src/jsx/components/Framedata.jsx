function Framedata(props) {
    let frameData = JSON.stringify(props.frames);

    console.log('Frames: ' + frameData);

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
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}

export default Framedata;