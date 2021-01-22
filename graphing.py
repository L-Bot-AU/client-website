from bokeh.plotting import figure, ColumnDataSource
from bokeh.embed import components
from bokeh.models import DatetimeTickFormatter, HoverTool

from datetime import datetime

#USELESS
def trends(day, data):
    plot = figure(plot_height=600, sizing_mode='stretch_width', title=day,
                  x_axis_label="Time", x_axis_type='datetime',
                  y_axis_label="Users", tools="hover")
    displayTimes = [value[0] for value in data]
    users = [value[1] for value in data]
    times = [datetime.strptime(value, "%H:%M%p") for value in displayTimes]
    source = ColumnDataSource(data={
        "times": times,
        "users": users,
        "displayTimes": displayTimes
    })
    plot.line('times', 'users', source=source, line_color="#1E90FF")
    hover = plot.select(dict(type=HoverTool))
    hover.tooltips = [("Time", "@displayTimes"),
                      ("Users", "@users")]
    hover.mode = 'mouse'
    # plot.xaxis.formatter = DatetimeTickFormatter(days="%H:%M%p")
    script, div = components(plot)
    return script, div
