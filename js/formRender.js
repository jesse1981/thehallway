var formRender = function() {
  var forms = [
    {
      name: 'contact',
      heading: 'Online Contact Form',
      tooltip: 'Fields marked with * are mandatory',
      useCaptcha: true,
      action: 'https://www.rheemservice.com/contact',
      enctype: 'multipart/form-data',
      method: 'POST',
      submission: {
        heading: 'Thank You',
        paragraph: '<p>Thank you for your enquiry.</p><p>A member of our team will be in touch with you shortly.</p>'
      },
      fields: [
        {
          name: '_heading_Purpose',
          label: 'Purpose of Enquiry',
          type: 'heading',
          required: true
        },
        {
          name: 'purpose',
          label: 'Purpose of Enquiry',
          type: 'select',
          options: [
            'Sales Enquiry',
            'Service Request',
            'Warranty Enquiry',
            'Commercial Product Enquiry',
            'Trade Enquiry',
            'Solar Enqury/Solar Quote Request',
            'RheemLink Enqury (QLD only)',
            'Spare Parts',
            'Find an installa',
            'Other'
          ],
          required: true
        },
        {
          name: '_paragraph_Purpose',
          type: 'paragraph',
          label: "<p>To book a service call simply complete and submit the form below or call 1300 556 036</p><p>For requests received between 8:00AM and 4:00PM Monday to Friday and 8:00AM and 3:00PM Saturday AEST we'll get back to you within 2 hours of receipt.  We'll get back to you the next business day for requests received outside of these hours.</p>"
        },
        {
          name: '_heading_PersonalDetails',
          label: 'Your Details',
          type: 'heading',
          required: false
        },
        {
          name: 'firstName',
          label: 'First Name',
          type: 'text',
          required: true
        },
        {
          name: 'lastName',
          label: 'Last Name',
          type: 'text',
          required: true
        },
        {
          name: 'address',
          label: 'Address',
          type: 'text',
          required: false,
          hide: {
            purpose: 'Find an installa'
          }
        },
        {
          name: 'state',
          label: 'State',
          type: 'select',
          options: [
            'Queensland',
            'New South Wales',
            'Australian Capital Territory',
            'Victoria',
            'Tasmania',
            'South Australia',
            'Western Australia',
            'Northern Territory'
          ],
          required: true,
          hide: {
            purpose: 'Find an installa'
          }
        },
        {
          name: 'email',
          label: 'Email',
          type: 'text',
          required: true,
          hide: {
            purpose: 'Find an installa'
          }
        },
        {
          name: 'phone',
          label: 'Phone',
          type: 'text',
          required: true,
          hide: {
            purpose: 'Find an installa'
          }
        },
        {
          name: 'suburbOrPostcode',
          type: 'text',
          label: 'Suburb or Post Code',
          required: true,
          show: {
            purpose: ['Find an installa']
          }
        },
        {
          name: '_tooltip_prefContactMethod',
          type: 'paragraph',
          label: 'How do you prefer to be contacted?',
          required: false
        },
        {
          name: 'prefContactMethod',
          label: '',
          type: 'select',
          options: [
            'Email',
            'Phone'
          ],
          required: false
        },
        {
          name: '_installa_email',
          type: 'text',
          label: 'Email Address',
          required: true,
          show: {
            purpose: ['Find an installa'],
            prefContactMethod: ['Email']
          }
        },
        {
          name: '_installa_phone',
          type: 'text',
          label: 'Phone Number',
          required: true,
          show: {
            purpose: ['Find an installa'],
            prefContactMethod: ['Phone']
          }
        },
        {
          name: '_tooltip_prefContactTime',
          type: 'paragraph',
          label: 'What is the best time to contact you?',
          required: false
        },
        {
          name: 'prefContactTime',
          label: '',
          type: 'select',
          options: [
            '8am - 12pm',
            '12pm - 5pm'
          ],
          required: false,
          show: {
            prefContactMethod: ['Phone']
          }
        },
        {
          name: '_heading_heaterDetails',
          label: 'Water Heater Details (if known):',
          type: 'heading',
          required: false,
          show: {
            purpose: [
              'Warranty Expiry',
              'Commercial Product Enqury',
              'Trade Enqury',
              'RheemLink Enqury (QLD only)',
              'Spare Parts',
              'Other'
            ]
          }
        },
        {
          name: 'heaterType',
          label: 'Type of Water Heater',
          type: 'select',
          options: [],
          required: false,
          show: {
            purpose: [
              'Warranty Expiry',
              'Commercial Product Enqury',
              'Trade Enqury',
              'RheemLink Enqury (QLD only)',
              'Spare Parts',
              'Other'
            ]
          }
        },
        {
          name: 'serialNumber',
          type: 'text',
          label: 'Serial Number',
          required: false,
          show: {
            purpose: ['Spare Parts']
          }
        },
        {
          name: '_heading_quotesReqd',
          type: 'heading',
          label: 'How many quotes would you like?',
          required: false,
          show: {
            purpose: ['RheemLink Enqury (QLD only)']
          }
        },
        {
          name: 'quotesReqd',
          type: 'select',
          options: [1,2,3],
          required: false,
          show: {
            purpose: ['RheemLink Enqury (QLD only)']
          }
        },
        {
          name: '_heading_spareParts',
          type: 'heading',
          label: 'Spare Part(s) Needed:',
          required: false,
          show: {
            purpose: ['Spare Parts']
          }
        },
        {
          name: '_tooltip_sparePartName',
          type: 'paragraph',
          label: 'Please only input one spare part at a time.',
          required: false,
          show: {
            purpose: ['Spare Parts']
          }
        },
        {
          name: '_subform_spareParts',
          type: 'subForm',
          max: 0, // unlimited
          newFormLabel: 'Add a Spare Part',
          show: {
            purpose: ['Spare Parts']
          },
          fields: [
            {
              name: 'sparePartName',
              type: 'text',
              label: 'Spare Part Name',
              required: true
            },
            {
              name: '_tooltip_sparePartPhoto',
              type: 'paragraph',
              label: 'Attach a photo to help identification',
              required: false
            },
            {
              name: 'sparePartPhoto',
              type: 'file',
              label: ''
            }
          ]
        },
        {
          name: '_heading_comments',
          label: 'Any comments:',
          type: 'heading',
          required: false
        },
        {
          name: 'comments',
          label: 'Write your message here.  Please be as specific as possible.',
          type: 'textarea',
          required: false
        }
      ]
    }
  ];

  var addHeading = function(label,size) {
    size = size || 1;
    var ele = document.createElement('h'+size);
    var _text = document.createTextNode(label);
    ele.appendChild(_text);
    return ele;
  }
  var addParagraph = function(text) {
    var ele = document.createElement("div");
    ele.innerHTML = text;
    return ele;
  }
  var addField = function(name,type,label,options) {
    switch (type) {
      case "select":
        var ele = document.createElement("select");
        for (var i in options) {
          var option = document.createElement("option");
          option.value  = options[i];
          option.text   = options[i];
          ele.appendChild(option);
        }
        break;
      case "textarea":
        var ele = document.createElement("textarea");
        ele.type = type;
        break;
      case "paragraph":
        var ele = document.createElement("div");
        ele.innerHTML = label;
        ele.setAttribute("class","tooltip");
        break;
      case "heading":
        var ele = addHeading(label,3);
        break;
      default:
        var ele = document.createElement("input");
        ele.type = type;
        break;
    }
    ele.id = name;
    ele.name = name;
    if (type!="heading" && type!="paragraph") ele.placeholder = label;

    return ele;
  }
  var changeHandler = function(e) {
    var id = e.target.id;
    var val = e.target.value;
    for (var i in forms[0].fields) {
      var f = forms[0].fields[i];
      // show logic (and)
      if (f.show!=undefined) {
        var display = "block";
        var obj = document.getElementById(f.name);
        for (var x in f.show) {
          if ((x == id) && (f.show[x].indexOf(val)==-1)) display = "none";
        }
        obj.style.display = display;
      }
      // hide logic (or)
      if (f.hide!=undefined) {
        var obj = document.getElementById(id);
        var display = "block";
        for (var x in f.show)
          if ((x == id) && (f.show[x].indexOf(val)>=0))
            display = "none";
        obj.style.display = display;
      }
    }
  }

  return {
    render: function(name) {
      var form = document.querySelector('.formRender[rel="'+name+'"]');
      if (!form) return;
      var index = -1;
      for (var i in forms) if (forms[i].name == name) index = i;
      if (index>=0) {
        form.appendChild(addHeading(forms[index].heading));
        form.appendChild(document.createTextNode(forms[index].tooltip));
        for (var i in forms[index].fields) {
          var field = forms[index].fields[i];
          if (field.type=="subForm") {
            var subFormDiv = document.createElement("div");
            for (var x in field.fields) {
              var name = field.fields[x].name + "[]";
              var type = field.fields[x].type;
              var label = field.fields[x].label;
              var options = (field.fields[x].type=="select") ? field.fields[x].options:[];
              subFormDiv.appendChild(addField(name,type,label,options));
            }
            subFormDiv.name = field.name;
            subFormDiv.id = field.name;
            if (field.max) {
              var subFormMax = document.createElement("div");
              var _subFormText = document.createTextNode(field.newFormLabel);
              subFormMax.setAttribute("rel",field.max);
              subFormMax.id = field.name + "_id";
              subFormDiv.appendChild(subFormMax);
            }
            form.appendChild(subFormDiv);
          }
          else {
            var name = field.name;
            var type = field.type;
            var label = field.label;
            var options = (field.type=="select") ? field.options:[];
            form.appendChild(addField(name,type,label,options));
          }
        }

        // captcha
        if (forms[index].useCaptcha) {
          var img = document.createElement("img");
          img.src = "img/captcha.jpg";
          form.appendChild(img);
        }

        // wrap in <form> and add submit
        var submit = document.createElement("input");
        submit.type = "submit";
        submit.value = "Submit";
        form.appendChild(submit);

        var formHolder = document.createElement('form');
        formHolder.action = forms[index].action;
        formHolder.method = forms[index].method;
        formHolder.enctype = forms[index].enctype;
        formHolder.appendChild(form);
        document.getElementsByTagName("body")[0].appendChild(formHolder);

        document.querySelector('select').onchange=changeHandler;

        // fire one time
        var selects = document.querySelectorAll('select');
        var event = new Event('change');
        for (var i in forms[index].fields) {
          var el = document.getElementById(forms[index].fields[i].id)
          if (el) el.dispatchEvent(event);
        }
      }
    }
  }
};
