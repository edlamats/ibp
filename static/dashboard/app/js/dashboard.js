/* ------------------------------------------------------------------------------
 *
 *  # Dashboard configuration
 *
 *  Demo dashboard configuration. Contains charts and plugin inits
 *
 *  Version: 1.0
 *  Latest update: Aug 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function() {


    // Animated progress chart
    // ------------------------------

    // Initialize charts
    var profile_completeness = $('#profile_completeness').val() / 100;

    progressCounter('#hours-available-progress', 38, 2, "#F06292", profile_completeness, "icon-user text-pink-400", 'Profile Completeness ')

    // Chart setup
    function progressCounter(element, radius, border, color, end, iconClass, textTitle, textAverage) {


        // Basic setup
        // ------------------------------

        // Main variables
        var d3Container = d3.select(element),
            startPercent = 0,
            iconSize = 32,
            endPercent = end,
            twoPi = Math.PI * 2,
            formatPercent = d3.format('.0%'),
            boxSize = radius * 2;

        // Values count
        var count = Math.abs((endPercent - startPercent) / 0.01);

        // Values step
        var step = endPercent < startPercent ? -0.01 : 0.01;



        // Create chart
        // ------------------------------

        // Add SVG element
        var container = d3Container.append('svg');

        // Add SVG group
        var svg = container
            .attr('width', boxSize)
            .attr('height', boxSize)
            .append('g')
            .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



        // Construct chart layout
        // ------------------------------

        // Arc
        var arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(radius)
            .outerRadius(radius - border);



        //
        // Append chart elements
        //

        // Paths
        // ------------------------------

        // Background path
        svg.append('path')
            .attr('class', 'd3-progress-background')
            .attr('d', arc.endAngle(twoPi))
            .style('fill', '#eee');

        // Foreground path
        var foreground = svg.append('path')
            .attr('class', 'd3-progress-foreground')
            .attr('filter', 'url(#blur)')
            .style('fill', color)
            .style('stroke', color);

        // Front path
        var front = svg.append('path')
            .attr('class', 'd3-progress-front')
            .style('fill', color)
            .style('fill-opacity', 1);



        // Text
        // ------------------------------

        // Percentage text value
        var numberText = d3.select(element)
            .append('h2')
            .attr('class', 'mt-15 mb-5')

        // Icon
        d3.select(element)
            .append("i")
            .attr("class", iconClass + " counter-icon")
            .attr('style', 'top: ' + ((boxSize - iconSize) / 2) + 'px');

        // Title
        d3.select(element)
            .append('div')
            .text(textTitle);

        // Subtitle
        d3.select(element)
            .append('div')
            .attr('class', 'text-size-small text-muted')
            .text(textAverage);



        // Animation
        // ------------------------------

        // Animate path
        function updateProgress(progress) {
            foreground.attr('d', arc.endAngle(twoPi * progress));
            front.attr('d', arc.endAngle(twoPi * progress));
            numberText.text(formatPercent(progress));
        }

        // Animate text
        var progress = startPercent;
        (function loops() {
            updateProgress(progress);
            if (count > 0) {
                count--;
                progress += step;
                setTimeout(loops, 10);
            }
        })();
    }




    // messages widget

    // Initialize Row link plugin
    $('tbody.rowlink').rowlink();

    // Grab first letter and insert to the icon
    $(".table tr").each(function (i) {

        // Title
        var $title = $(this).find('.letter-icon-title'),
            letter = $title.eq(0).text().charAt(0).toUpperCase();

        // Icon
        var $icon = $(this).find('.letter-icon');
        $icon.eq(0).text(letter);
    });

});
