{% macro coffeestore(name, id='', address='', city='San Diego', state='CA', email=None) -%}
    <a id="{{id}}"></a>
    <h4>{{name}}</h4>
    <p>{{address}} {{city}},{{state}}</p>
    {% if email %}<p><a href='mailto:{{email}}'>{{email}}</a></p>{% endif %}
{%- endmacro %}