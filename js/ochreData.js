document.addEventListener('DOMContentLoaded', () => {
    const uuid = document.getElementById('ochreContainer').getAttribute('data-uuid');
    const ochre_url = "https://ochre.lib.uchicago.edu/ochre?uuid=";
    const link = ochre_url + uuid;
    loadXML();

    function loadXML() {
        requestXML(link);
        console.log('loadXML -- OK');
    }

    function requestXML(link) {
        var connect = new XMLHttpRequest();
        connect.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                parseXML(this.responseXML);
            } else if (this.readyState == 4) {
                console.error('Failed to load resource: Status ' + this.status);
            }
        };
        connect.open("GET", link, true);
        connect.send();
        console.log('requestXML -- OK');
    };

    function parseXML(sourceXML) {
        var textTitle = sourceXML.getElementsByTagName('identification');
        if (textTitle.length > 1) {
            var title_string = document.createTextNode(textTitle[1].textContent);
            document.getElementById('title').appendChild(title_string);
        } else {
            console.error('Title element not found in XML.');
        }

        var properties = sourceXML.getElementsByTagName('property');
        if (properties.length > 0) {
            for (let i = 0; i < properties.length; i++) {
                var tr = document.createElement('tr');
                document.getElementById('ochreTableBody').appendChild(tr);

                var property = document.createElement('td');
                property.innerHTML = properties[i].children[0].textContent;
                tr.appendChild(property);

                var value = document.createElement('td');
                value.innerHTML = properties[i].children[1].textContent;
                tr.appendChild(value);
            }
        }

        var resources = sourceXML.getElementsByTagName('resource');
        if (resources.length > 0 && resources[0].getAttribute("format") === 'image/jpeg') {
            var img = document.createElement('img');
            var src = link + "&preview";
            img.src = src;
            document.getElementById('preview').appendChild(img);
        }
    }
});
