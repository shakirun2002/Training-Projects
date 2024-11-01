$(document).ready(function() {
    function loadItems() {
        if (!localStorage.getItem('needItems') && !localStorage.getItem('haveItems')) {
            const defaultNeedItems = ["Milk", "Bread", "Eggs"];
            const defaultHaveItems = ["Cheese", "Butter", "Steak"];
            localStorage.setItem('needItems', JSON.stringify(defaultNeedItems));
            localStorage.setItem('haveItems', JSON.stringify(defaultHaveItems));
        }

        const needItems = JSON.parse(localStorage.getItem('needItems')) || [];
        const haveItems = JSON.parse(localStorage.getItem('haveItems')) || [];

        if ($('#needList').length) {
            $('#needList').html(needItems.map(item => createListItem(item)).join(''));
        }

        if ($('#haveList').length) {
            $('#haveList').html(haveItems.map(item => createListItem(item, true)).join(''));
        }
    }

    function saveItems() {
        const needItems = $('#needList li').map(function() { return $(this).text().trim(); }).get();
        const haveItems = $('#haveList li').map(function() { return $(this).text().trim(); }).get();
        localStorage.setItem('needItems', JSON.stringify(needItems));
        localStorage.setItem('haveItems', JSON.stringify(haveItems));
    }

    function createListItem(item, checked = false) {
        return `<li><input type="checkbox" ${checked ? 'checked' : ''}> ${item} <a href="#" class="remove">&#10006;</a></li>`;
    }

    $('#shoppingForm').on('submit', function(event) {
        event.preventDefault();
        var value = $('#item').val().trim();
        if (!value) return;

        var targetList = $('#addNeed').is(':focus') ? '#needList' : '#haveList';
        $(targetList).append(createListItem(value, targetList === '#haveList'));
        $('#item').val('');
        saveItems();
    });

    $('ul').on('click', '.remove', function(event) {
        event.preventDefault();
        $(this).closest('li').remove();
        saveItems();
    });

    $('ul').on('change', 'input[type=checkbox]', function() {
        const listItem = $(this).closest('li');
        const targetList = this.checked ? '#haveList' : '#needList';
        $(targetList).append(listItem);
        saveItems();
    });

    loadItems();
});
