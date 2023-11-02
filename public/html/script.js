function navigatePage(selectElement) {
    const selectedValue = selectElement.value;
    let redirectUrl = "";

    if (selectedValue === "Date") {
        redirectUrl = "byDate.html";
    } else if (selectedValue === "Department") {
        redirectUrl = "dept.html";
    } else if (selectedValue === "Program") {
        redirectUrl = "prog.html";
    }

    window.location.href = redirectUrl;
}