var ctx = document.getElementById('chartSec').getContext('2d');
    var data = {
      "labels": [
        "01_math", "02_string_concat", "03_1_string_number_concat", "03_2_string_number_format", "04_string_simple_functions", "05_string_multibyte", "06_string_manipulation", "07_regex", "08_1_hashing", "08_2_crypt", "09_json_encode", "10_json_decode", "11_serialize", "12_unserialize", "13_array_fill", "14_array_range", "14_array_unset", "15_loops", "16_loop_ifelse", "17_loop_ternary", "18_1_loop_defined_access", "18_2_loop_undefined_access", "19_type_functions", "20_type_conversion", "21_0_loop_exception_none", "21_1_loop_exception_try", "21_2_loop_exception_catch", "22_loop_null_op", "23_loop_spaceship_op", "26_1_class_public_properties", "26_2_class_getter_setter", "26_3_class_magic_methods"
      ],
      "datasets": [
        {
          "label": "PHP 5.6",
          "backgroundColor": "#0056c7",
          "fill": true,
          "data": ["4.911", "0.365", "1.585", "1.542", "3.396", "4.612", "4.355", "9.091", "2.961", "6.108", "3.674", "6.769", "3.174", "2.551", "4.572", "2.951", "3.399", "2.241", "1.441", "2.255", "0.772", "3.871", "1.956", "1.174", "0.109", "0.111", "3.101", "0", "0", "0.243", "0.701", "1.446"]
        },
        {
          "label": "PHP 7.0",
          "backgroundColor": "#0062ff",
          "fill": true,
          "data": ["1.585", "0.171", "1.266", "1.085", "1.497", "4.149", "2.593", "1.887", "2.212", "6.077", "1.884", "2.929", "1.395", "1.934", "1.424", "0.295", "1.289", "0.821", "0.503", "1.362", "0.435", "2.569", "0.827", "0.534", "0.029", "0.033", "1.702", "1.009", "0.923", "0.069", "0.248", "0.706"]
        },
        {
          "label": "PHP 7.4",
          "backgroundColor": "#037ae2",
          "fill": true,
          "data": ["1.226", "0.172", "1.247", "1.080", "1.120", "0.774", "2.006", "1.453", "2.037", "6.051", "1.819", "2.512", "1.302", "1.367", "1.463", "0.456", "1.184", "0.466", "0.489", "1.065", "0.344", "2.112", "0.549", "0.517", "0.020", "0.025", "0.955", "0.850", "0.810", "0.056", "0.160", "0.545"]
        },
        {
          "label": "PHP 8.0",
          "backgroundColor": "#0091ff",
          "fill": true,
          "data": ["1.137", "0.167", "1.194", "1.060", "0.975", "0.758", "2.113", "1.516", "2.015", "6.056", "1.763", "2.467", "1.289", "1.253", "1.395", "0.489", "1.052", "0.480", "0.421", "0.972", "0.300", "2.211", "0.504", "0.497", "0.015", "0.019", "0.989", "0.800", "0.723", "0.047", "0.157", "0.477"]
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

    var chartSec = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
