async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="blog-title"]').value.trim();
    const context = document.querySelector('input[name="blog-context"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (title && context) {
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                context
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.edit-blog-form').addEventListener('submit', editFormHandler);