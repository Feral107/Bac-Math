function verif() {
    console.log("Script chargé !");
    document.getElementById("monFormulaire").addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Formulaire soumis !");
        let math = parseFloat(document.getElementById("math").value) || 0;
        let phy = parseFloat(document.getElementById("phy").value) || 0;
        let svt = parseFloat(document.getElementById("svt").value) || 0;
        let infe = parseFloat(document.getElementById("infe").value) || 0;
        let infp = parseFloat(document.getElementById("infp").value) || 0;
        let ang = parseFloat(document.getElementById("ang").value) || 0;
        let fr = parseFloat(document.getElementById("fr").value) || 0;
        let ar = parseFloat(document.getElementById("ar").value) || 0;
        let phi = parseFloat(document.getElementById("phi").value) || 0;
        let sp = parseFloat(document.getElementById("sp").value) || 0;
        let op = parseFloat(document.getElementById("op").value) || 0;
        console.log("Math: ", math);
        console.log("Physique: ", phy);
        console.log("SVT: ", svt);
        if (!num(math) || !num(phy) || !num(svt) || !num(infe) || !num(infp) ||
        !num(ang) || !num(fr) || !num(ar) || !num(phi) || !test(sp) || !test(op)) {
            alert("Réécrivez les notes correctement.");
            return false;
        }
        let res = (math + phy + svt + infe + infp + ang + fr + ar + phi + sp + op) / 11;
        console.log("Résultat calculé : ", res);

        if (sp >= 10) {
            res += sp / 16;
        }
        if (op >= 10) {
            res += op / 32;
        }
        let resultElement = document.getElementById("ress");
        if (!resultElement) {
            console.log("Erreur : élément 'ress' introuvable !");
            return;
        }
        resultElement.innerText = "Moyenne : " + res.toFixed(2);
});
}
function num(x) {
    return !isNaN(x) && x >= 0 && x <= 20;
}
function test(y) {
    return (!isNaN(y) && y >= 0 && y <= 20)|| y=="";
}
function supp()
{
    document.getElementById("monFormulaire").reset();
    document.getElementById("ress").innerText = "";
}