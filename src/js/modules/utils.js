var Utils = {
  parseStringToArray: function(string) {
    array = string.split(",").map(function (dataset) {
      return dataset.trim();
    });
    if (array.length > 0 && array[0] !== "") {
      return array;
    } else {
      return undefined;
    }
  },
  parseKeywords: function(keyword_array) {
    return keyword_array === undefined ? '' : keyword_array.join(", ");
  },
  parseReferences: function(reference_array) {
    // todo: handle links 
    return reference_array === undefined ? '' : reference_array.join(", ");
  },
  parsePublisher: function(publisher) {
    return publisher === undefined ? '' : publisher.name;
  },
  parseEmail: function(email_string) {
    return email_string.replace("mailto:", "");
  },
  parseDescription: function(description) {
    return description.slice(0,137) + '...';
  },
  setPageTitle: function(page_title) {
    $('title').text(page_title);
    $('#header').text(page_title);
  }
};
