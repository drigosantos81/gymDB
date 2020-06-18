const currentPage = location.pathname;
const menuItens = document.querySelectorAll(".links a");

for (item of menuItens) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    };
};

let totalPages = 20,
    selectedPage = 15,
    pages = []

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

    const firstAndLastPage = currentPage == 1 || currentPage == totalPages;
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2;
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2;
    
    if (firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {
        pages.push(currentPage);
    }
    
}

console.log(pages);

/* PAGINAÇÃO
CASO DE EXEMPLO 

* totalPages = 20

selectedPage = 6
[1, ..., 4, 5, 6, 7, 8, ..., 20]

ou

selectedPage = 5
[1, 2, 3, 4, 5, 6, 7, ..., 20]

ou

selectedPage = 15
[1, ..., 13, 14, 15, 16, 17, ..., 20]

*/

