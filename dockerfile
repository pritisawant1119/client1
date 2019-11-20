FROM 200.0.1.100:5000/httpd

COPY Test/ /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND
