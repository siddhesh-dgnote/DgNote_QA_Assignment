# This file contains the WSGI configuration required to serve up your
# web application at http://<your-username>.pythonanywhere.com/
# It works by setting the variable 'application' to a WSGI handler of some
# description.

import sys
path = '/home/siddhesh123/DgNote_QA_Assignment'
if path not in sys.path:
    sys.path.append(path)

from app import app as application
