// function showProfile(){
// 	document.getElementByClass('ls').style.display = 'none';
// 	document.getElementById('Profile').style.display='block';
// }
// ---------------------------DropDownProFile--------------------------------
let profileDropdownList = document.querySelector(".profile-dropdown-list");
let btn = document.querySelector(".profile-dropdown-btn");

let classList = profileDropdownList.classList;

const toggle = () => classList.toggle("active");

window.addEventListener("click", function (e) {
  if (!btn.contains(e.target)) classList.remove("active");
});
// ------------------------------------------Filter-------------------------------------

 const fcontainer = document.querySelector('.ForAlb');
        const galleryItems = document.querySelectorAll('.gallery-item');

        document.querySelector('.filter').addEventListener('click', function(event) {
            if (event.target.classList.contains('filter-item')) {
                // Deactivate previous active filter
                document.querySelector('.filter-item.active')?.classList.remove('active');
                // Activate the clicked filter
                event.target.classList.add('active');

                const filterValue = event.target.getAttribute('data-filter');
                galleryItems.forEach((item) => {
                    if (item.classList.contains(filterValue) || filterValue === 'all') {
                        item.classList.remove('hide');
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                        item.classList.add('hide');
                    }
                });
            }
        });
