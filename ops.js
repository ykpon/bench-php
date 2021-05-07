var ctx = document.getElementById('chartOps').getContext('2d');
    var data = {
      "labels": [
        "01_math", "02_string_concat", "03_1_string_number_concat", "03_2_string_number_format", "04_string_simple_functions", "05_string_multibyte", "06_string_manipulation", "07_regex", "08_1_hashing", "08_2_crypt", "09_json_encode", "10_json_decode", "11_serialize", "12_unserialize", "13_array_fill", "14_array_range", "14_array_unset", "15_loops", "16_loop_ifelse", "17_loop_ternary", "18_1_loop_defined_access", "18_2_loop_undefined_access", "19_type_functions", "20_type_conversion", "21_0_loop_exception_none", "21_1_loop_exception_try", "21_2_loop_exception_catch", "22_loop_null_op", "23_loop_spaceship_op", "26_1_class_public_properties", "26_2_class_getter_setter", "26_3_class_magic_methods"
      ],
      "datasets": [
        {
          "label": "PHP 5.6",
          "backgroundColor": "#0056c7",
          "fill": true,
          "data": ["203.64","21.11","3.16","3.24","382.84","28.19","298.48","143.00","439.03","1.64","353.86","192.04","409.63","509.69","10.94","33.89","14.71","89.23","34.70","22.18","25.91","5.17","1.53","2.56","36.58","35.91","1.29","0","0","20.55","7.13","3.46"]
        },
        {
          "label": "PHP 7.0",
          "backgroundColor": "#0062ff",
          "fill": true,
          "data": ["631.03","45.06","3.95","4.61","868.54","31.33","501.43","688.92","587.64","1.65","689.91","443.82","932.12","672.15","35.11","338.49","38.79","243.54","99.49","36.71","45.94","7.79","3.63","5.62","138.32","122.79","2.35","49.55","54.20","72.43","20.15","7.09"]
        },
        {
          "label": "PHP 7.4",
          "backgroundColor": "#037ae2",
          "fill": true,
          "data": ["815.41","44.68","4.01","4.63","1.16","167.93","648.03","894.97","638.32","1.65","714.87","517.46","998.85","951.32","34.18","219.27","42.21","429.64","102.22","46.94","58.13","9.47","5.47","5.80","197.64","157.69","4.19","58.82","61.75","89.41","31.20","9.18"]
        },
        {
          "label": "PHP 8.0",
          "backgroundColor": "#0091ff",
          "fill": true,
          "data": ["879.27","46.02","4.19","4.72","1.33","171.39","615.15","857.26","645.17","1.65","737.22","526.95","1.01","1.04","35.85","204.40","47.52","416.53","118.70","51.46","66.62","9.05","5.96","6.04","267.84","208.77","4.05","62.52","69.15","106.85","31.90","10.47"]
        }
      ]
    };
    var options = {
      "title": {
        "display": true,
        "text": "Seconds (low is better)",
        "fullWidth": true
      },
      "legend": {
        "display": true
      },
      "scales": {
        "yAxes": [
          {
            "ticks": {
              "beginAtZero": true
            }
          }
        ]
      },
	  "responsive": true,
	  "maintainAspectRatio": false
    };

    var chartOps = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
