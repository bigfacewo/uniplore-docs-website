### 组件介绍
**“加载语料库”（Corpus）**加载文本文档，（可选）用类别标记。

<hr/>

- 输入：
  - 无
- 输出：
  - cor：文本实例

<hr/>


### 页面介绍
点击**“加载语料库”（Corpus）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/corpus/param.png) ](/img/aistudio/io/corpus/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>标签选项</td> 
      <td>
      样例数据：系统提供的样例文本数据集，可直接选择加载<br/>
      手动上传：上传自定义文本数据集
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>标题</td> 
      <td>
      配置文本数据集的标题属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>可选属性/忽略属性</td> 
      <td>
      配置文本数据集的可选属性以及忽略属性
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载语料库”（Corpus）**控件加载文本数据集，连接用**“语料库查看器”（Corpus Viewer）**控件查看结果。  
[ ![](/img/aistudio/io/corpus/workflow.png) ](/img/aistudio/io/corpus/workflow.png)

案例中加载 andersen 样例数据集，案例中控件执行结果如下图所示：  
[ ![](/img/aistudio/io/corpus/workflow-result.png ](/img/aistudio/io/corpus/workflow-result.png)