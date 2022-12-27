const input = document.querySelector('input');
		const btn = document.querySelector('.addTask > button');

		btn.addEventListener('click', addList);
		input.addEventListener('keyup', (e)=>{
			(e.keyCode === 13 ? addList(e) : null);
		})

		function addList(e){
			const notCompleted = document.querySelector('.not');
			const Completed = document.querySelector('.done');

			const newList = document.createElement('li');
			const checkBtn = document.createElement('button');
			const delBtn = document.createElement('button');

			checkBtn.innerHTML = '<i class="fa fa-check"></i>';
			delBtn.innerHTML = '<i class="fa fa-trash"></i>';


			if(input.value !==''){
				newList.textContent = input.value;
				input.value = '';
				notCompleted.appendChild(newList);
				newList.appendChild(checkBtn);
				newList.appendChild(delBtn);
			}

			checkBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
				Completed.appendChild(parent);
				checkBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function(){
				const parent = this.parentNode;
				parent.remove();
			});
		}