let data = [
	{id: 2, name: "Организация", parent_id: null},
	{id: 3, name: "Бухгалтерия", parent_id: 2},
	{id: 6, name: "Отдел охраны", parent_id: 2},
	{id: 7, name: "Караульная служба", parent_id: 6},
	{id: 8, name: "Бюро пропусков", parent_id: 6},
	{id: 12, name: "Патентный отдел", parent_id: 2},
	{id: 13, name: "Лётная служба", parent_id: 2},
	{id: 14, name: "Лётный отряд Боинг 737", parent_id: 13},
	{id: 17, name: "Лётный отряд Боинг 747", parent_id: 13},
	{id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parent_id: 14},
	{id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parent_id: 14},
	{id: 21, name: "Лётно-методический отдел", parent_id: 13}
]

for (let i = 0; i < data.length; i++) {

	let list = '';
	let list_end = '';

	for (let j = 0; j < indent(data[i]); j++) {
		list += '<ul><li>';
		list_end += '</li></ul>';
	}
	document.write(list + data[i].name + list_end);
}

function get_id(id) {
	for (let i = 0; i < data.length; i++) {
		if (data[i].id === id) return data[i];
	}
}

function indent(parent) {
	if (parent.parent_id !== null) {
		return indent(get_id(parent.parent_id)) + 1;
	} else return 0;
}



