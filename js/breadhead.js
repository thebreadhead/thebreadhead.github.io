
SIGN_UP_BTN_TEXT = 'More Info';


function buildSignUpTable(parentNode)
{

}

function buildRootSignupTable(parentNode)
{

}

function createCol(colSize, innerText)
{
    var col = document.createElement('div');
    col.setAttribute('class', 'col-' + colSize);
    if (innerText)
        col.innerHTML = innerText;
    return col;
}

function convertEpochToDateString(time) {
    var date = new Date(time*1000);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function signUpBtnTxt(url)
{
    return '<a href="' + url + '" target="_blank">' + SIGN_UP_BTN_TEXT + '</a>';
}

function addSignupRow(parentNode, dateAndTime, duration, teacher, location, spotsLeft, cost, classUrl)
{
    var divRow = document.createElement("div");
    divRow.setAttribute("class", "row");

    var dateCol = createCol(2, convertEpochToDateString(dateAndTime));
    var durationCol = createCol(1, duration);
    var teacherCol = createCol(2, teacher);
    var locationCol = createCol(2, location);
    var spotsCol = createCol(1, spotsLeft);
    var costCol = createCol(1, '$' + cost);

    var signUpCol = createCol(3);
    var signUpBtn = document.createElement('button');
    signUpBtn.setAttribute('class', 'btn-outline-light btn-sm btn');
    signUpBtn.innerHTML = signUpBtnTxt(classUrl);

    signUpCol.appendChild(signUpBtn);

    divRow.appendChild(dateCol);
    divRow.appendChild(durationCol);
    divRow.appendChild(teacherCol);
    divRow.appendChild(locationCol);
    divRow.appendChild(spotsCol);
    divRow.appendChild(costCol);
    divRow.appendChild(signUpCol);

    parentNode.appendChild(divRow);

}