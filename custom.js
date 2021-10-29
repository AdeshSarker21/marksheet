function btn1Click() {
    //All Variable Names
    var t1 = text1.value;
    var t2 = text2.value;
    var t3 = text3.value;
    var t4 = text4.value;
    var t5 = text5.value;
    //If we do not provide the number in a box, a notice will be given from this section.
    if (t1 == "" || t2 == "" || t3 == "" || t4 == "" || t5 == "") {
        lblMes.innerHTML = "Please Enter All Subject Marks.";
        lblMes.style.color = "red"; //This is read border.
        lblMes.style.marginLeft = "25px";
    } else {
        lblMes.innerHTML = "Please Check Your Result";
        lblMes.style.color = "green";
        lblMes.style.marginLeft = "25px";

        lblTotal.innerHTML = parseInt(t1) + parseInt(t2) + parseInt(t3) + parseInt(t4) + parseInt(t5); //Here is all Total Marks.

        //If the number is below 32 in any subject then the box will be marked with red border And GPA will come F. I have used if else condition for this. When the number is 33 or more than 33 the border will be green.
        if (parseInt(t1) < 33 || parseInt(t2) < 33 || parseInt(t3) < 33 || parseInt(t4) < 33 || parseInt(t5) < 33) {
            lblGrade.innerHTML = "F";
            lblPer.innerHTML = "0";
            if (parseInt(t1) < 33) {
                text1.style.borderColor = "red";
            } else {
                text1.style.borderColor = "green";
            }
            if (parseInt(t2) < 33) {
                text2.style.borderColor = "red";
            } else {
                text2.style.borderColor = "green";
            }
            if (parseInt(t3) < 33) {
                text3.style.borderColor = "red";
            } else {
                text3.style.borderColor = "green";
            }
            if (parseInt(t4) < 33) {
                text4.style.borderColor = "red";
            } else {
                text4.style.borderColor = "green";
            }
            if (parseInt(t5) < 33) {
                text5.style.borderColor = "red";
            } else {
                text5.style.borderColor = "green";
            }

        } else {
            text1.style.borderColor = "green";
            text2.style.borderColor = "green";
            text3.style.borderColor = "green";
            text4.style.borderColor = "green";
            text5.style.borderColor = "green";

            lblPer.innerHTML = parseInt(lblTotal.innerHTML) / 5;

            //80 < A+,70 < A, 60 <B, 50 <C, 40 <D, 33 <E, 32>F
            if (parseFloat(lblPer.innerHTML) >= 80) {
                lblGrade.innerHTML = "A+";
            } else if (parseFloat(lblPer.innerHTML) >= 70) {
                lblGrade.innerHTML = "A";
            } else if (parseFloat(lblPer.innerHTML) >= 60) {
                lblGrade.innerHTML = "B";
            } else if (parseFloat(lblPer.innerHTML) >= 50) {
                lblGrade.innerHTML = "C";
            } else if (parseFloat(lblPer.innerHTML) >= 40) {
                lblGrade.innerHTML = "D";
            } else if (parseFloat(lblPer.innerHTML) >= 33) {
                lblGrade.innerHTML = "E";
            } else {
                lblGrade.innerHTML = "F";
            }

        }
    }


}
