import '../../stylesheets/PopUps.css';
import TekkenLegend from '../../images/notation/legend.jpg'
import $ from 'jquery';

export default function TekkenLegendPopUp() {
    return(
        <div className="tekken-legend-popup" onClick={() => {HideTekkenLegend()}}>
            <img src={TekkenLegend} alt="" />
        </div>
    )
}

function HideTekkenLegend() {
    $(".tekken-legend-popup").fadeOut("slow", () => $(".tekken-legend-popup").hide());
}