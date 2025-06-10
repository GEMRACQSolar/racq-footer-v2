<template>
  <footer :style="footerStyle">
    <div class="footer-container">
      <div v-if="content.showLinks && content.links && content.links.length" class="footer-links">
        <a
          v-for="(link, index) in content.links"
          :key="index"
          :href="link.url"
          :style="linkStyle"
          class="footer-link"
        >
          {{ link.text }}
        </a>
      </div>
      <div class="copyright" :style="copyrightStyle">
        {{ content.copyrightText }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'RACQFooterV2',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Emit loaded event for WeWeb integration
    this.$emit('trigger-event', {
      name: 'footer:loaded',
      event: {
        timestamp: new Date().toISOString()
      }
    })
  },
  computed: {
    footerStyle() {
      return {
        backgroundColor: this.content.backgroundColor || '#4b5869',
        padding: '40px 20px',
        width: '100%',
        marginTop: 'auto'
      }
    },
    linkStyle() {
      return {
        color: this.content.textColor || '#FFE600',
        textDecoration: 'none',
        margin: '0 15px',
        fontSize: '14px',
        transition: 'opacity 0.3s ease'
      }
    },
    copyrightStyle() {
      return {
        color: this.content.textColor || '#FFE600',
        fontSize: '14px',
        marginTop: this.content.showLinks && this.content.links?.length ? '20px' : '0'
      }
    }
  }
}
</script>

<style scoped>
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.footer-link:hover {
  opacity: 0.8;
}

.copyright {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Responsive design */
@media (max-width: 768px) {
  .footer-links {
    flex-direction: column;
    gap: 15px;
  }
  
  .footer-link {
    margin: 0 !important;
  }
}
</style>