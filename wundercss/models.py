from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=32)
    author = models.CharField(max_length=64)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    source = models.URLField()
    image = models.CharField(max_length=256)

    @property
    def image_path(self):
      return 'images/projects/' + self.image